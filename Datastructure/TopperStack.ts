/**
 * Created by ugur on 2016-12-26.
 */

export namespace Datastructure {
  export interface ITopper {
    id: string;
    name: string;
    color: string;
    room: string;
  }

  export interface IStackMap {
    [index: string]: Datastructure.TopperStack;
  }

  export class TopperStack {
    toppers: ITopper[] = [];

    TopperStack() {}

    constructor(object) {
      this.toppers = object;
    }

    public setList(list) {
      this.toppers = list;
    }

    public getList() {
      return this.toppers;
    }

    public push(element: ITopper) {
      let index = this.findElementByName(element);
      if (index === -1) {
        this.toppers.push(element);
      }
      return index;
    }

    public topThat(element: ITopper) {
      let index = this.findElementIndex(element);
      if (index > -1) {
        this.toppers.splice(index, 1);
        this.toppers.unshift(element);
      }
    }

    public remove(element: ITopper) {
      let index = this.findElementIndex(element);
      if (index > -1) {
        this.toppers.splice(index, 1);
      }
    }

    private findElementIndex(element: ITopper) {
      return this.toppers
        .map(function(e) {
          return e.id;
        })
        .indexOf(element.id);
    }

    private findElementByName(element: ITopper) {
      return this.toppers
        .map(function(e) {
          return e.name;
        })
        .indexOf(element.name);
    }
  }
}
