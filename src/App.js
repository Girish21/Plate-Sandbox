import './styles.css'
import * as React from 'react'
import {
  Plate,
  createReactPlugin,
  createHistoryPlugin,
  createPlateComponents,
  createParagraphPlugin,
  createBlockquotePlugin,
  createCodeBlockPlugin,
  createHeadingPlugin,
  createPlateOptions,
  createResetNodePlugin,
  createSoftBreakPlugin,
  createExitBreakPlugin,
  createImagePlugin,
  createHorizontalRulePlugin,
  createLinkPlugin,
  createListPlugin,
  createTablePlugin,
  createMediaEmbedPlugin,
  createAlignPlugin,
  createBoldPlugin,
  createCodePlugin,
  createItalicPlugin,
  createHighlightPlugin,
  createUnderlinePlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createNodeIdPlugin,
  createIndentPlugin,
  createTrailingBlockPlugin,
  createSelectOnBackspacePlugin,
  createComboboxPlugin,
  createFontColorPlugin,
  createFontBackgroundColorPlugin,
  createFontSizePlugin,
  createDeserializeCSVPlugin,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_TODO_LI,
  ELEMENT_PARAGRAPH,
  ELEMENT_CODE_BLOCK,
  ELEMENT_IMAGE,
  ELEMENT_HR,
  ELEMENT_TD,
  KEYS_HEADING,
  isBlockAboveEmpty,
  isSelectionAtBlockStart
} from '@udecode/plate'
import { Toolbar } from './toolbar'
import CopyToClipboard from 'react-copy-to-clipboard'

const resetBlockTypesCommonRule = {
  types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
  defaultType: ELEMENT_PARAGRAPH
}

const CONFIG = {
  options: createPlateOptions(),
  components: createPlateComponents(),
  resetBlockType: {
    rules: [
      {
        ...resetBlockTypesCommonRule,
        hotkey: 'Enter',
        predicate: isBlockAboveEmpty
      },
      {
        ...resetBlockTypesCommonRule,
        hotkey: 'Backspace',
        predicate: isSelectionAtBlockStart
      }
    ]
  },
  softBreak: {
    rules: [
      { hotkey: 'shift+enter' },
      {
        hotkey: 'enter',
        query: {
          allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD]
        }
      }
    ]
  },
  exitBreak: {
    rules: [
      {
        hotkey: 'mod+enter'
      },
      {
        hotkey: 'mod+shift+enter',
        before: true
      },
      {
        hotkey: 'enter',
        query: {
          start: true,
          end: true,
          allow: KEYS_HEADING
        }
      }
    ]
  },
  align: {
    validTypes: [
      ELEMENT_PARAGRAPH,
      ELEMENT_H1,
      ELEMENT_H2,
      ELEMENT_H3,
      ELEMENT_H4,
      ELEMENT_H5,
      ELEMENT_H6
    ]
  },
  indent: {
    validTypes: [
      ELEMENT_PARAGRAPH,
      ELEMENT_H1,
      ELEMENT_H2,
      ELEMENT_H3,
      ELEMENT_H4,
      ELEMENT_H5,
      ELEMENT_H6,
      ELEMENT_BLOCKQUOTE,
      ELEMENT_CODE_BLOCK
    ]
  },
  trailingBlock: { type: ELEMENT_PARAGRAPH },
  selectOnBackspace: { allow: [ELEMENT_IMAGE, ELEMENT_HR] }
}

const PLUGINS = [
  createReactPlugin(),
  createHistoryPlugin(),
  createParagraphPlugin(), // paragraph element
  createBlockquotePlugin(), // blockquote element
  createCodeBlockPlugin(), // code block element
  createHeadingPlugin(), // heading elements
  createImagePlugin(),
  createHorizontalRulePlugin(),
  createLinkPlugin(),
  createListPlugin(),
  createTablePlugin(),
  createMediaEmbedPlugin(),
  createFontColorPlugin(),
  createFontBackgroundColorPlugin(),
  createFontSizePlugin(),
  createAlignPlugin(CONFIG.align),
  createBoldPlugin(),
  createCodePlugin(),
  createItalicPlugin(),
  createHighlightPlugin(),
  createUnderlinePlugin(),
  createStrikethroughPlugin(),
  createSubscriptPlugin(),
  createSuperscriptPlugin(),
  createNodeIdPlugin(),
  createIndentPlugin(CONFIG.indent),
  createResetNodePlugin(CONFIG.resetBlockType),
  createSoftBreakPlugin(CONFIG.softBreak),
  createExitBreakPlugin(CONFIG.exitBreak),
  createTrailingBlockPlugin(CONFIG.trailingBlock),
  createSelectOnBackspacePlugin(CONFIG.selectOnBackspace),
  createComboboxPlugin()
]
PLUGINS.push(createDeserializeCSVPlugin({ plugins: PLUGINS }))

const options = {
  nodeTypes: {
    paragraph: 'p',
    block_quote: 'blockquote',
    code_block: 'code_block',
    link: 'a',
    ul_list: 'ul',
    ol_list: 'ol',
    listItem: 'li',
    heading: {
      1: 'h1',
      2: 'h2',
      3: 'h3',
      4: 'h4',
      5: 'h5',
      6: 'h6'
    },
    emphasis_mark: 'em',
    strong_mark: 'bold',
    delete_mark: 'strikethrough',
    inline_code_mark: 'code',
    thematic_break: 'thematic_break',
    image: 'img'
  }
}

const initialValue = [
  { type: 'h1', children: [{ text: 'Editor' }] },
  {
    type: 'p',
    children: [
      { text: 'Hello ', bold: true },
      { text: 'needl', bold: true, italic: true }
    ]
  },
  {
    type: 'table',
    children: [
      {
        type: 'tr',
        children: [
          {
            type: 'th',
            children: [{ type: 'p', children: [{ text: 'Heading 1' }] }]
          },
          {
            type: 'th',
            children: [{ type: 'p', children: [{ text: 'Heading 2' }] }]
          }
        ]
      },
      {
        type: 'tr',
        children: [
          {
            type: 'td',
            children: [{ type: 'p', children: [{ text: 'Value 1' }] }]
          },
          {
            type: 'td',
            children: [{ type: 'p', children: [{ text: 'Value 2' }] }]
          }
        ]
      }
    ]
  },
  { type: 'p', children: [{ text: '' }] },
  {
    type: 'img',
    url: 'https://needl-assets.s3.amazonaws.com/gradient.jpeg',
    children: [{ text: '' }]
  },
  { type: 'p', children: [{ text: '' }] },
  {
    type: 'p',
    children: [
      {
        type: 'a',
        url: 'https://www.needl.ai/',
        children: [{ text: 'https://www.needl.ai/' }]
      }
    ]
  },
  { type: 'p', children: [{ text: '' }] }
]

const Editor = () => {
  return (
    <>
      <section className="editor container">
        <Toolbar />
        <Plate
          initialValue={initialValue}
          onChange={(val) => console.log(val)}
          editableProps={{ placeholder: 'Type...' }}
          plugins={PLUGINS}
          options={CONFIG.options}
          components={CONFIG.components}
        />
      </section>
    </>
  )
}

const Clipboard = () => {
  const data = React.useRef(`
  John,Doe,120 jefferson st.,Riverside, NJ, 08075
  Jack,McGinnis,220 hobo Av.,Phila, PA,09119
  "John ""Da Man""",Repici,120 Jefferson St.,Riverside, NJ,08075
  `)

  return (
    <div className="container">
      <h2>Copy the below CSV and paste it in the editor</h2>
      <textarea readOnly children={data.current} />
    </div>
  )
}

export default function App() {
  return (
    <>
      <Editor />
      <Clipboard />
    </>
  )
}
