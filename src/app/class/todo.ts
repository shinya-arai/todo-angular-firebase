export class Todo {
  content: string;
  check: boolean;

  constructor(content: string, check: boolean) {
    this.content = content;
    this.check = check;
  }
}
