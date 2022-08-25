export function requiredField(value){
    if (!value){
        return "Обязательное поле!"
    }
}

export function maxLength(value,max){
    if (value.length >max){
        return `Длина не должна превышать ${max} символов!`
    }
}

export function onlySpace(value){
    if (!value.trim() && value.length!==0){
        return "Содержит только пробелы!"
    }
}