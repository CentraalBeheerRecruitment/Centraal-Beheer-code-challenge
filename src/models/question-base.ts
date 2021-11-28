export class QuestionBase<T> {
    value: T|undefined;
    key: string;
    label: string;
    required: boolean;
    validateKenteken: boolean;
    order: number;
    controlType: string;
    type: string;
    options: {key: string, value: string}[];
    class: string;
    placeholder: string;
  
    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        validateKenteken?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        options?: {key: string, value: string}[];
        class?: string,
        placeholder?: string
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.validateKenteken = !!options.validateKenteken;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.options = options.options || [];
      this.class = options.class || '';
      this.placeholder = options.placeholder || '';
    }
  }