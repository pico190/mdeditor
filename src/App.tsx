import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  ChangeAdmonitionType,
  CodeToggle,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  MDXEditor,
  UndoRedo,
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
import { useEffect, useState } from "react";
import themes from "./themes";
import {
  AltArrowDownLinear,
  BulletListLinear,
  ChecklistLinear,
  CodeLinear,
  GridLinear,
  KeyboardLinear,
  NumberedListLinear,
  PalleteLinear,
  TextBoldLinear,
  TextItalicLinear,
  TextUnderlineLinear,
  ThematicBreakLinear,
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

function App() {
  const [keyboardsoundsEnabled, setKeyboardsoundsEnabled] = useState(false);
  const [theme, setTheme] = useState(themes.find((t) => t.name === "Dark"));
  const [loaded, setLoaded] = useState(false);

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
      if (
        document
          .querySelector("#keyboardsounds")
          ?.getAttribute("data-isActive") === "false"
      ) {
        return;
      }
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
          stereo: pan,
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
  }, []);

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
      <div
        style={{ backgroundColor: theme.colors.bg }}
        className="flex flex-col h-[100vh] overflow-y-auto"
      >
        <MDXEditor
          className="p-2 mdx h-full "
          iconComponentFor={iconHandler}
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
                    <div className="ml-auto flex gap-2 items-center">
                      <div
                        className="hover:opacity-75 active:scale-95"
                        data-isActive={keyboardsoundsEnabled}
                        id="keyboardsounds"
                        onClick={() => {
                          setKeyboardsoundsEnabled(!keyboardsoundsEnabled);
                        }}
                      >
                        <KeyboardLinear
                          className={`size-6 opacity-75 pointer-events-none ${
                            keyboardsoundsEnabled
                              ? "*:text-[var(--accent)]"
                              : "*:text-[var(--text)]"
                          }`}
                        />
                      </div>
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
    </>
  );
}

export default App;
