import { BorderAll } from '@styled-icons/material/BorderAll'
import { CodeBlock } from '@styled-icons/boxicons-regular/CodeBlock'
import { Subscript } from '@styled-icons/foundation/Subscript'
import { Superscript } from '@styled-icons/foundation/Superscript'
import { FormatIndentDecrease } from '@styled-icons/material/FormatIndentDecrease'
import { BorderBottom } from '@styled-icons/material/BorderBottom'
import { BorderClear } from '@styled-icons/material/BorderClear'
import { BorderLeft } from '@styled-icons/material/BorderLeft'
import { BorderRight } from '@styled-icons/material/BorderRight'
import { BorderTop } from '@styled-icons/material/BorderTop'
import { Check } from '@styled-icons/material/Check'
import { FontDownload } from '@styled-icons/material/FontDownload'
import { FormatAlignCenter } from '@styled-icons/material/FormatAlignCenter'
import { FormatAlignJustify } from '@styled-icons/material/FormatAlignJustify'
import { FormatAlignLeft } from '@styled-icons/material/FormatAlignLeft'
import { FormatAlignRight } from '@styled-icons/material/FormatAlignRight'
import { FormatBold } from '@styled-icons/material/FormatBold'
import { FormatColorText } from '@styled-icons/material/FormatColorText'
import { FormatIndentIncrease } from '@styled-icons/material/FormatIndentIncrease'
import { FormatItalic } from '@styled-icons/material/FormatItalic'
import { FormatListBulleted } from '@styled-icons/material/FormatListBulleted'
import { FormatListNumbered } from '@styled-icons/material/FormatListNumbered'
import { FormatQuote } from '@styled-icons/material/FormatQuote'
import { FormatStrikethrough } from '@styled-icons/material/FormatStrikethrough'
import { FormatUnderlined } from '@styled-icons/material/FormatUnderlined'
import { Image } from '@styled-icons/material/Image'
import { Link } from '@styled-icons/material/Link'
import { Looks3 } from '@styled-icons/material/Looks3'
import { Looks4 } from '@styled-icons/material/Looks4'
import { Looks5 } from '@styled-icons/material/Looks5'
import { Looks6 } from '@styled-icons/material/Looks6'
import { LooksOne } from '@styled-icons/material/LooksOne'
import { LooksTwo } from '@styled-icons/material/LooksTwo'
import { OndemandVideo } from '@styled-icons/material/OndemandVideo'

import {
  BlockToolbarButton,
  CodeBlockToolbarButton,
  ListToolbarButton,
  AlignToolbarButton,
  MarkToolbarButton,
  ToolbarButton,
  LinkToolbarButton,
  ImageToolbarButton,
  MediaEmbedToolbarButton,
  getPreventDefaultHandler,
  getPlatePluginType,
  ColorPickerToolbarDropdown,
  MARK_BG_COLOR,
  MARK_BOLD,
  MARK_CODE,
  MARK_COLOR,
  MARK_HIGHLIGHT,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_UL,
  ELEMENT_OL,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_TODO_LI,
  ELEMENT_PARAGRAPH,
  ELEMENT_CODE_BLOCK,
  ELEMENT_TD,
  indent,
  outdent,
  usePlateEditorRef,
  HeadingToolbar,
  TableToolbarButton,
  insertTable,
  deleteTable,
  addRow,
  deleteRow,
  addColumn,
  deleteColumn
} from '@udecode/plate'

const ListToolbarButtons = () => {
  const editor = usePlateEditorRef()

  return (
    <>
      <ListToolbarButton
        type={getPlatePluginType(editor, ELEMENT_UL)}
        icon={<FormatListBulleted />}
      />
      <ListToolbarButton
        type={getPlatePluginType(editor, ELEMENT_OL)}
        icon={<FormatListNumbered />}
      />
    </>
  )
}

const AlignToolbarButtons = () => {
  return (
    <>
      <AlignToolbarButton value="left" icon={<FormatAlignLeft />} />
      <AlignToolbarButton value="center" icon={<FormatAlignCenter />} />
      <AlignToolbarButton value="right" icon={<FormatAlignRight />} />
      <AlignToolbarButton value="justify" icon={<FormatAlignJustify />} />
    </>
  )
}

const BasicElementToolbarButtons = () => {
  const editor = usePlateEditorRef()

  return (
    <>
      <BlockToolbarButton
        type={getPlatePluginType(editor, ELEMENT_H1)}
        icon={<LooksOne />}
      />
      <BlockToolbarButton
        type={getPlatePluginType(editor, ELEMENT_H2)}
        icon={<LooksTwo />}
      />
      <BlockToolbarButton
        type={getPlatePluginType(editor, ELEMENT_H3)}
        icon={<Looks3 />}
      />
      <BlockToolbarButton
        type={getPlatePluginType(editor, ELEMENT_H4)}
        icon={<Looks4 />}
      />
      <BlockToolbarButton
        type={getPlatePluginType(editor, ELEMENT_H5)}
        icon={<Looks5 />}
      />
      <BlockToolbarButton
        type={getPlatePluginType(editor, ELEMENT_H6)}
        icon={<Looks6 />}
      />
      <BlockToolbarButton
        type={getPlatePluginType(editor, ELEMENT_BLOCKQUOTE)}
        icon={<FormatQuote />}
      />
      <CodeBlockToolbarButton
        type={getPlatePluginType(editor, ELEMENT_CODE_BLOCK)}
        icon={<CodeBlock />}
      />
    </>
  )
}

const IndentToolbarButtons = () => {
  const editor = usePlateEditorRef()

  return (
    <>
      <ToolbarButton
        onMouseDown={editor && getPreventDefaultHandler(outdent, editor)}
        icon={<FormatIndentDecrease />}
      />
      <ToolbarButton
        onMouseDown={editor && getPreventDefaultHandler(indent, editor)}
        icon={<FormatIndentIncrease />}
      />
    </>
  )
}

export const BasicMarkToolbarButtons = () => {
  const editor = usePlateEditorRef()

  return (
    <>
      <MarkToolbarButton
        type={getPlatePluginType(editor, MARK_BOLD)}
        icon={<FormatBold />}
      />
      <MarkToolbarButton
        type={getPlatePluginType(editor, MARK_ITALIC)}
        icon={<FormatItalic />}
      />
      <MarkToolbarButton
        type={getPlatePluginType(editor, MARK_UNDERLINE)}
        icon={<FormatUnderlined />}
      />
      <MarkToolbarButton
        type={getPlatePluginType(editor, MARK_STRIKETHROUGH)}
        icon={<FormatStrikethrough />}
      />
      <MarkToolbarButton
        type={getPlatePluginType(editor, MARK_CODE)}
        icon={<CodeBlock />}
      />
      <MarkToolbarButton
        type={getPlatePluginType(editor, MARK_SUPERSCRIPT)}
        clear={getPlatePluginType(editor, MARK_SUBSCRIPT)}
        icon={<Superscript />}
      />
      <MarkToolbarButton
        type={getPlatePluginType(editor, MARK_SUBSCRIPT)}
        clear={getPlatePluginType(editor, MARK_SUPERSCRIPT)}
        icon={<Subscript />}
      />
    </>
  )
}

const TableToolbarButtons = () => (
  <>
    <TableToolbarButton
      tooltip={{ content: 'New table' }}
      icon={<BorderAll />}
      transform={insertTable}
    />
    <TableToolbarButton
      tooltip={{ content: 'Delete table' }}
      icon={<BorderClear />}
      transform={deleteTable}
    />
    <TableToolbarButton
      tooltip={{ content: 'Add row' }}
      icon={<BorderBottom />}
      transform={addRow}
    />
    <TableToolbarButton
      tooltip={{ content: 'Delete row' }}
      icon={<BorderTop />}
      transform={deleteRow}
    />
    <TableToolbarButton
      tooltip={{ content: 'Add column' }}
      icon={<BorderLeft />}
      transform={addColumn}
    />
    <TableToolbarButton
      tooltip={{ content: 'Delete column' }}
      icon={<BorderRight />}
      transform={deleteColumn}
    />
  </>
)

export const Toolbar = () => {
  return (
    <HeadingToolbar>
      <BasicElementToolbarButtons />
      <ListToolbarButtons />
      <IndentToolbarButtons />
      <BasicMarkToolbarButtons />
      <ColorPickerToolbarDropdown
        pluginKey={MARK_COLOR}
        icon={<FormatColorText />}
        selectedIcon={<Check />}
        tooltip={{ content: 'Text color' }}
      />
      <ColorPickerToolbarDropdown
        pluginKey={MARK_BG_COLOR}
        icon={<FontDownload />}
        selectedIcon={<Check />}
        tooltip={{ content: 'Highlight color' }}
      />
      <AlignToolbarButtons />
      <LinkToolbarButton icon={<Link />} />
      <ImageToolbarButton icon={<Image />} />
      <MediaEmbedToolbarButton icon={<OndemandVideo />} />
      <TableToolbarButtons />
    </HeadingToolbar>
  )
}
