import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  ChangeAdmonitionType,
  CodeToggle,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  MDXEditor,
  TooltipWrap,
  UndoRedo,
  type MDXEditorMethods,
} from "@mdxeditor/editor";
import { Howl } from "howler";
import "@mdxeditor/editor/style.css";
import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  tablePlugin,
  codeBlockPlugin,
  toolbarPlugin,
  thematicBreakPlugin,
} from "@mdxeditor/editor";
import { useEffect, useRef, useState } from "react";
import themes from "./themes";
import {
  AltArrowDownLinear,
  AudioMuted,
  AudioSound,
  BulletListLinear,
  ChecklistLinear,
  CodeLinear,
  Copy,
  FX,
  GridLinear,
  KeyboardLinear,
  Music,
  NumberedListLinear,
  PalleteLinear,
  RadialBlur,
  Save,
  TextBoldLinear,
  TextItalicLinear,
  TextUnderlineLinear,
  ThematicBreakLinear,
  Tick,
} from "./icons";

const switchs = [
  "modern1",
  "modern2",
  "modern3",
  "modern4",
  "modern9",
  "modern10",
  "modern12",
];

const qwerty_cols = [
  ["Escape", "º", "ª", "Tab", "CapsLock", "_ShiftLeft", "_ControlLeft"],
  ["F1", "Q", "A", "<", ">", "1", "!", "|", "Meta"],
  ["F2", "W", "S", "Z", "X", "Alt", "2", '"', "@"],
  ["F3", "E", "D", "C", "3", "·", "#"],
  ["F4", "R", "F", "4", "$", "~"],
  ["F5", "T", "G", "V", "5", "%"],
  ["F6", "Y", "H", "B", "6", "&", "¬"],
  ["F7", "U", "J", "N", "7", "/"],
  ["F8", "I", "K", "M", "8", "("],
  ["F9", "O", "L", ",", ";", "9", ")"],
  ["F10", "0", "=", "P", "Ñ", ".", ":", "AltGr"],
  ["F11", "?", "'", "^", "`", "[", "´", "¨", "{", "-", "_", "_ControlRight"],
  ["F12", "}", "Ç", "+", "*", "]", "¿", "¡"],
  [
    "Insert",
    "Backspace",
    "Enter",
    "_ShiftRight",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "Delete",
    "ArrowDown",
  ],
];

const allKeys = [
  ...switchs,
  "space",
  "space2",
  "enter",
  "backspace",
  "ctrl",
  "alt",
];

function iconHandler(name: string) {
  switch (name) {
    case "format_bold":
      return <TextBoldLinear className="!size-6 opacity-75" />;
    case "format_italic":
      return <TextItalicLinear className="!size-6 opacity-75" />;
    case "format_underlined":
      return <TextUnderlineLinear className="!size-6 opacity-75" />;
    case "table":
      return <GridLinear className="!size-6 opacity-75" />;
    case "horizontal_rule":
      return <ThematicBreakLinear className="!size-6 opacity-75" />;
    case "code":
      return <CodeLinear className="!size-6 opacity-75" />;
    case "format_list_bulleted":
      return <BulletListLinear className="!size-6 opacity-75" />;
    case "format_list_numbered":
      return <NumberedListLinear className="!size-6 opacity-75" />;
    case "format_list_checked":
      return <ChecklistLinear className="!size-6 opacity-75" />;
    case "arrow_drop_down":
      return <AltArrowDownLinear className="!size-6 opacity-75" />;
    default:
      return <span>{name}</span>;
  }
}

function AudioUpdater({ musicEnabled }: { musicEnabled: boolean }) {
  const [audioLevel, setAudioLevel] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  useEffect(() => {
    if (musicEnabled) {
      const audioContext = new AudioContext();
      const audio = new Audio("/socialFeedia.mp3");
      audio.loop = true;
      audio.volume = 0.2;
      audio.crossOrigin = "anonymous";

      const source = audioContext.createMediaElementSource(audio);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      source.connect(analyser);
      analyser.connect(audioContext.destination);

      audio.play();

      audioRef.current = audio;
      analyserRef.current = analyser;

      const updateLevel = () => {
        analyser.getByteFrequencyData(dataArray);
        // promedio de las frecuencias
        const average =
          dataArray.reduce((sum, val) => sum + val, 0) / dataArray.length;
        setAudioLevel(average); // de 0 a 255
        animationFrameRef.current = requestAnimationFrame(updateLevel);
      };

      updateLevel();
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    }

    // limpiar todo si el componente se desmonta
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [musicEnabled]);

  useEffect(() => {
    document.documentElement.style.scale = 1 + audioLevel / 1800 + "";
    document.documentElement.style.overflow = "hidden";
  }, [audioLevel]);

  return <></>;
}

function App() {
  const [keyboardsoundsEnabled, setKeyboardsoundsEnabled] = useState(false);
  const [stereoSounding, setStereoSounding] = useState(false);
  const [textShadowEnabled, setTextShadowEnabled] = useState(false);
  const [theme, setTheme] = useState(themes.find((t) => t.name === "Dark"));
  const [copied, setCopied] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const mdxEditorRef = useRef<MDXEditorMethods>(null);

  useEffect(() => {
    if (!window.pressedKeys) window.pressedKeys = new Set();
    async function keyup(e: KeyboardEvent) {
      if (window.pressedKeys.has(e.code)) {
        window.pressedKeys.delete(e.code);
      }
    }
    async function keydown(e: KeyboardEvent) {
      if (window.pressedKeys.has(e.code)) return;
      if (!window.pressedKeys.has(e.code)) {
        window.pressedKeys.add(e.code);
      }
      if (!keyboardsoundsEnabled) return;
      const randomSwitch = switchs[Math.floor(Math.random() * switchs.length)];

      let path = "/clicks/" + randomSwitch + ".mp3";
      const audioContext = new AudioContext();
      const bufferCache = {};

      const play = async () => {
        const pitches = [1, 1.1, 1.2, 1.3, 1.4];
        const pitch = pitches[Math.floor(Math.random() * pitches.length)];

        let quertyCol = qwerty_cols.findIndex((col) =>
          col.some((key) =>
            key.startsWith("_")
              ? e.code.toLowerCase() === key.slice(1).toLowerCase()
              : e.key.toLowerCase() === key.toLowerCase()
          )
        );
        const pan =
          quertyCol === -1 ? 0 : 1 - (2 * quertyCol) / (qwerty_cols.length - 1);

        const sound = new Howl({
          src: [path],
          rate: pitch,
          stereo: stereoSounding ? pan : 0.0,
        });

        sound.play();
      };

      if (e.key === " " || e.key === "Space") {
        if (Math.random() > 0.5) {
          path = "/clicks/space.mp3";
          return play();
        }
        path = "/clicks/space2.mp3";
        return play();
      }

      if (e.key === "Enter") {
        path = "/clicks/enter.mp3";
        return play();
      }

      if (e.key === "Backspace") {
        path = "/clicks/backspace.mp3";
        return play();
      }

      if (
        e.key === "ArrowDown" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === "Tab" ||
        e.key === "Shift" ||
        e.key === "Control" ||
        e.key === "Alt" ||
        e.key === "Meta" ||
        e.key === "CapsLock" ||
        e.key === "Escape" ||
        e.key === "Insert" ||
        e.key === "Delete" ||
        e.key === "Home" ||
        e.key === "End" ||
        e.key === "PageUp" ||
        e.key === "PageDown"
      ) {
        if (Math.random() > 0.5) {
          path = "/clicks/ctrl.mp3";
          return play();
        }
        path = "/clicks/alt.mp3";
        return play();
      }
      return play();
    }
    document.addEventListener("keydown", keydown);
    document.addEventListener("keyup", keyup);
    return () => {
      document.removeEventListener("keydown", keydown);
      document.addEventListener("keyup", keyup);
    };
  }, [keyboardsoundsEnabled, stereoSounding]);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          * {
            --text: ${theme.colors.text};
            --bg: ${theme.colors.bg};
            --accent: ${theme.colors.accent};
            --muted: ${theme.colors.muted};
            --border: ${theme.colors.border};
          }`,
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: textShadowEnabled
            ? `.mdx [contenteditable="true"] * {text-shadow: 0px 0px 50px currentColor;}`
            : "",
        }}
      />
      <div
        style={{ backgroundColor: theme.colors.bg }}
        className="flex flex-col h-[100vh] overflow-y-auto"
      >
        <MDXEditor
          className="p-2 mdx h-full "
          iconComponentFor={iconHandler}
          ref={mdxEditorRef}
          markdown="# Hello world"
          plugins={[
            headingsPlugin(),
            listsPlugin(),
            quotePlugin(),
            tablePlugin(),
            codeBlockPlugin(),
            toolbarPlugin({
              toolbarClassName: "toolbar",
              toolbarContents: () => {
                return (
                  <>
                    <div className="toolbarselectors flex">
                      <BoldItalicUnderlineToggles />
                      <div className="separator" />
                      <InsertTable />
                      <InsertThematicBreak />
                      <div className="separator" />
                      <ListsToggle />
                      <div className="separator" />
                      <BlockTypeSelect />
                      <div className="separator" />
                      <CodeToggle />
                    </div>
                    <div className="ml-auto flex toolbarselectors gap-1">
                      <TooltipWrap title="Copy markdown">
                        <div
                          className="hover:opacity-75 active:scale-95"
                          onClick={() => {
                            setCopied(true);
                            const md = mdxEditorRef.current?.getMarkdown();
                            navigator.clipboard.writeText(md);
                            setTimeout(() => {
                              setCopied(false);
                            }, 1000);
                          }}
                        >
                          {copied ? (
                            <Tick className="size-[1.25rem] opacity-75 pointer-events-none" />
                          ) : (
                            <Copy className="size-[1.45rem] opacity-75 pointer-events-none" />
                          )}
                        </div>
                      </TooltipWrap>
                      <div className="separator" />
                      <TooltipWrap title="Text shadow">
                        <div
                          className="hover:opacity-75 active:scale-95"
                          data-isActive={textShadowEnabled}
                          id="shadowEnabled"
                          onClick={() => {
                            setTextShadowEnabled(!textShadowEnabled);
                          }}
                        >
                          <RadialBlur
                            className={`size-[1.6rem] opacity-75 pointer-events-none ${
                              textShadowEnabled
                                ? "*:text-[var(--accent)]"
                                : "*:text-[var(--text)]"
                            }`}
                          />
                        </div>
                      </TooltipWrap>
                      <div className="separator" />
                      <TooltipWrap title="Music">
                        <div
                          className="hover:opacity-75 active:scale-95"
                          onClick={() => {
                            setMusicEnabled(!musicEnabled);
                          }}
                        >
                          <Music
                            className={`size-[1.6rem] opacity-75 pointer-events-none ${
                              musicEnabled
                                ? "*:text-[var(--accent)]"
                                : "*:text-[var(--text)]"
                            }`}
                          />
                        </div>
                      </TooltipWrap>
                      <div className="separator opacity-0" />
                      <TooltipWrap title="Stereo sounding">
                        <div
                          className="hover:opacity-75 active:scale-95"
                          data-isActive={stereoSounding}
                          id="stereosounding"
                          onClick={() => {
                            setStereoSounding(!stereoSounding);
                          }}
                        >
                          <FX
                            className={`size-[1.6rem] opacity-75 pointer-events-none ${
                              stereoSounding
                                ? "*:text-[var(--accent)]"
                                : "*:text-[var(--text)]"
                            }`}
                          />
                        </div>
                      </TooltipWrap>
                      <TooltipWrap title="Keyboard sounds">
                        <div
                          className="hover:opacity-75 active:scale-95"
                          data-isActive={keyboardsoundsEnabled}
                          id="keyboardsounds"
                          onClick={() => {
                            setKeyboardsoundsEnabled(!keyboardsoundsEnabled);
                          }}
                        >
                          {keyboardsoundsEnabled ? (
                            <AudioSound
                              className={`size-[1.6rem] opacity-75 pointer-events-none ${
                                keyboardsoundsEnabled
                                  ? "*:text-[var(--accent)]"
                                  : "*:text-[var(--text)]"
                              }`}
                            />
                          ) : (
                            <AudioMuted
                              className={`size-[1.6rem] opacity-75 pointer-events-none ${
                                keyboardsoundsEnabled
                                  ? "*:text-[var(--accent)]"
                                  : "*:text-[var(--text)]"
                              }`}
                            />
                          )}
                        </div>
                      </TooltipWrap>
                      <div className="separator" />
                      <TooltipWrap title="Change theme">
                        <div
                          className="hover:opacity-75 active:scale-95"
                          onClick={() => {
                            const themeIndex = themes.findIndex(
                              (t) => t.name === theme.name
                            );
                            setTheme(themes[(themeIndex + 1) % themes.length]);
                          }}
                        >
                          <PalleteLinear className="size-6 opacity-75 pointer-events-none" />
                        </div>
                      </TooltipWrap>
                    </div>
                  </>
                );
              },
            }),
            thematicBreakPlugin(),
            markdownShortcutPlugin(),
          ]}
        />
      </div>
      <AudioUpdater musicEnabled={musicEnabled} />
    </>
  );
}

export default App;
