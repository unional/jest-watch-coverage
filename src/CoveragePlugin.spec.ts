import t from 'assert'
import CoveragePlugin from '.';

test(`usage info defaults to 'e', 'run coverage once'`, () => {
  const subject = new CoveragePlugin({ config: {}, stdout: process.stdout })

  t.deepStrictEqual(subject.getUsageInfo(), { key: 'e', prompt: 'run coverage once' })
})
