import { unpartial } from 'unpartial';

export interface UsageInfo {
  key: string,
  prompt: string
}
export class CoveragePlugin {
  usageInfo: UsageInfo
  globalConfig: any
  constructor({ stdout, config }: {
    config: Partial<UsageInfo>,
    stdout: any
  }) {
    this.usageInfo = unpartial({ key: 'e', prompt: 'run coverage once' }, config)
  }

  // Add hooks to Jest lifecycle events
  apply(jestHooks: any) {
    jestHooks.shouldRunTestSuite(() => {
      // console.log(this.globalConfig)
      return true
    })
    jestHooks.onTestRunComplete((results: jest.AggregatedResult) => {
      return
    })
  }

  // Get the prompt information for interactive plugins
  getUsageInfo() {
    return this.usageInfo
  }

  // Executed when the key from `getUsageInfo` is input
  run(globalConfig: any, updateConfigAndRun: any) {
    // this.globalConfig = globalConfig
    updateConfigAndRun({ mode: 'watch', collectCoverage: true })
    return Promise.resolve()
  }
}
