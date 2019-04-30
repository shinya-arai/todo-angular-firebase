export class Todo {
  content: string;
  state: boolean;

  constructor(content: string, state: boolean) {
    this.content = content;
    this.state = state;
  }
}
