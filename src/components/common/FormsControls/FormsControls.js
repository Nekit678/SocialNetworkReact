import s from './FormsControls.module.css'

export function Textarea({ field, form, ...props }) {

    if (!form.errors[field.name] || (form.errors[field.name] && !form.touched[field.name])) {
        return (
            <div>
                <textarea {...field} {...props}></textarea>
            </div>
        )
    } else {
        return (
            <div className={s.errorTextarea}>
                <textarea {...field} {...props}></textarea>
                <span title={form.errors[field.name]}>
                    <img src="https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-red-error-icon-image_2248553.jpg"></img>
                </span>
            </div>)
    }

}

export function Input({ field, form, ...props }) {

    if (!form.errors[field.name] || (form.errors[field.name] && !form.touched[field.name])) {
        return (
            <div>
                <input {...field} {...props} />
            </div>
        )
    } else {
        return (
            <div className={s.errorInput}>
                <input {...field} {...props} title={form.errors[field.name]} />
            </div>)
    }

}

