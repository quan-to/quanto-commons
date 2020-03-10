/**
 * Created by Lucas Teske on 29/03/18.
 */
import { GraphQLEnumType } from 'graphql';
import { IntegerEnumTypeFields } from "./GQLTypes/EnumFieldTypes";
declare const StatementHistoryCategoryEnum: {
    [id: string]: IntegerEnumTypeFields;
};
declare const StatementHistoryCategoryEnumGraphQL: GraphQLEnumType;
declare const StatementHistoryCategoryGroup: {
    [id: number]: number[];
};
declare const codeToCategory: (code: number) => number;
export { StatementHistoryCategoryGroup, StatementHistoryCategoryEnum, StatementHistoryCategoryEnumGraphQL, codeToCategory, };
