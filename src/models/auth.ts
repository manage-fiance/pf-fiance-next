export type Rule = {
    required?: boolean,
    pattern?: string
}

export type FieldForm = {
    label: string,
    key: string,
    rule: Array<Rule>
}

export type FormProps = {
    action: string,
    onValidate: () => void,
    fields: Array<FieldForm>,
    submitLabel?: string
}