import { withInstall } from '../install'
import CardContent from './src/index.vue'

export const FnCardContent = withInstall(CardContent, 'FnCardContent')
FnCardContent.name = 'FnCardContent'
export default FnCardContent
export * from './src/card-content'
export type CardContentInstance = InstanceType<typeof CardContent>