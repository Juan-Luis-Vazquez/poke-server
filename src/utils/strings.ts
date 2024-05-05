interface LanguageStrings {
    [key: string]: string;
}

const english: LanguageStrings = {
    genericSuccessMessage: "Request proccessed successfully",
    genericErrorMessage: "Error processig Request"
};

const spanish: LanguageStrings = {
    genericSuccessMessage: "Solicitud procesada con éxito",
    genericErrorMessage: "Error procesando la solicitud"
};

export const language = english;

export const strings = {
    english,
    spanish
};