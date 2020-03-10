/**
 * Created by Nemo on 13/02/19.
 * Using code by Lucas Teske
 *
 * Fontes de documentacao sobre boletos:
 * - http://download.itau.com.br/bankline/SISPAG_CNAB.pdf
 * - https://www.bb.com.br/docs/pub/emp/empl/dwn/Doc5175Bloqueto.pdf
 * - https://portal.febraban.org.br/pagina/3150/1094/pt-br/servicos-novo-plataforma-boletos
 * Este código valida a representação numérica do código de barras. Note que os dados da linha digitável não
 * se apresentam na mesma sequência do código de barras.
 */
export declare type Boleto = {
    bank?: string;
    currency?: string;
    amount?: string;
    expiryDate?: Date;
    verifDigits?: {
        field20to24?: {
            code: string;
            verifDigit: string;
            verified?: boolean;
        };
        field25to34?: {
            code: string;
            verifDigit: string;
            verified?: boolean;
        };
        field35to44?: {
            code: string;
            verifDigit: string;
            verified?: boolean;
        };
    };
};
