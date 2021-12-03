export class Pawn {
  constructor(name: string, position: string, isEaten: boolean) {
    this._name = name;
    this._position = position;
    this._isEaten = isEaten;
  }

  // tslint:disable-next-line:variable-name
  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  // tslint:disable-next-line:variable-name
  private _position: string;

  get position(): string {
    return this._position;
  }

  set position(value: string) {
    this._position = value;
  }

  // tslint:disable-next-line:variable-name
  private _isEaten: boolean;

  get isEaten(): boolean {
    return this._isEaten;
  }

  set isEaten(value: boolean) {
    this._isEaten = value;
  }
}
