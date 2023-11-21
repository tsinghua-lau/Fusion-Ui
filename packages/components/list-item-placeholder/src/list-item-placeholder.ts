import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes } from 'vue'

export const listItemPlaceholderProps = buildProps({
  cs: {
    type: [Object, String],
  },
})

export type ListItemPlaceholderProps = ExtractPropTypes<
  typeof listItemPlaceholderProps
>