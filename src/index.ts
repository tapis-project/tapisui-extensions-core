type OAuth = {
  
}

type Configuration = {
  authentication: OAuth
  showPages: Array<string>
  hidePages: Array<string>
}

type Page = {

}

type PageMapping = {
  [key: string]: Page
}

class Extension {
    public pageMapping: PageMapping
    public configs: Configuration

    constructor() {
      this.pageMapping = {}

    }

    setConfiguration(configuration: Configuration): void {
      
    }

    registerPage<T>(key: string, page: T): void {
      this.pageMapping[key] = page
    }
}

export default Extension

const extension = new Extension()

export {
  Extension
}