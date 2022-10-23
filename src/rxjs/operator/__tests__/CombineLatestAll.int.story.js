import { withTests } from '@storybook/addon-jest'
import { CombineLatestAll } from '../CombineLatestAll'
import results from '../../../../.jest-test-results.json'

export default {
  title: 'RxJS/Operator/CombineLatestAll',
  component: CombineLatestAll,
  decorators: [withTests({ results })],
  parameters: { jest: ['CombineLatestAll.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <CombineLatestAll />
}
