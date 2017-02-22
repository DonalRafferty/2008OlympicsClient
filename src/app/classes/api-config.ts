export class ApiConfig {
  constructor(private host: string) {}

  public createUrl(path: string): string {
    return this.host + path;
  }
}
