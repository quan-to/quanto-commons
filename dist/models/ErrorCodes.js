const ErrorCodes = {
    InternalServerError: 'INTERNAL_SERVER_ERROR',
    NotFound: 'NOT_FOUND',
    EmailAlreadyInUse: 'EMAIL_ALREADY_IN_USE',
    NoDataAvailable: 'NO_DATA_AVAILABLE',
    InvalidLoginInformation: 'INVALID_LOGIN_INFORMATION',
    NotLogged: 'NOT_LOGGED',
    AlreadyExists: 'ALREADY_EXISTS',
    PermissionDenied: 'PERMISSION_DENIED',
    InvalidTokenType: 'INVALID_TOKEN_TYPE',
    InvalidFieldData: 'INVALID_FIELD_DATA',
    AlreadyClient: 'ALREADY_CLIENT',
    AlreadyPaid: 'ALREADY_PAID',
    PaymentError: 'PAYMENT_ERROR',
    InsufficientFunds: 'INSUFFICIENT_FUNDS',
    BankingSystemOffline: 'BANKING_SYSTEM_OFFLINE',
    OutdatedAPI: 'OUTDATED_API',
    BankNotSupported: 'BANK_NOT_SUPPORTED',
    VaultSystemOffline: 'VAULT_SYSTEM_OFFLINE',
    ServerIsBusy: 'SERVER_IS_BUSY',
    Revoked: 'REVOKED',
    AlreadySigned: 'ALREADY_SIGNED',
    Rejected: 'REJECTED',
    OperationNotSupported: 'OPERATION_NOT_SUPPORTED',
    GraphQLError: 'GRAPHQL_ERROR',
    OperationLimitExceeded: 'OPERATION_LIMIT_EXCEEDED',
    InvalidTransactionDate: 'INVALID_TRANSACTION_DATE',
    BoletoCreationNotEnabled: 'BOLETO_CREATION_NOT_ENABLED',
    BoletoOurNumberExausted: 'BOLETO_OUR_NUMBER_EXAUSTED',
    NotImplemented: 'NOT_IMPLEMENTED',
    MaxOTPTriesExceeded: 'MAX_OTP_TRIES_EXCEEDED',
    AccountInUse: 'ACCOUNT_IN_USE',
    AccountLocked: 'ACCOUNT_LOCKED',
    NotSupported: 'NOT_SUPPORTED',
    SystemUnavailable: 'SYSTEM_UNAVAILABLE',
    EverythingIsTerrible: 'EVERYTHING_IS_TERRIBLE',
    QuantoInternalError: 'QUANTO_INTERNAL_ERROR',
    RoutingSystemOffline: 'ROUTING_SYSTEM_OFFLINE',
    QITSystemOffline: 'QIT_SYSTEM_OFFLINE',
    TargetConnectionError: 'CONNECTION_ERROR',
    VaulterIsDead: 'VAULTER_IS_DEAD',
    SynchronizationError: 'SYNCHRONIZATION_ERROR',
    RoutingError: 'ROUTING_ERROR',
};
const ErrorCodeValueToKey = (value) => {
    const keys = Object.keys(ErrorCodes);
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if (ErrorCodes[k] === value) {
            return k;
        }
    }
    return null;
};
export { ErrorCodes, ErrorCodeValueToKey, };
//# sourceMappingURL=ErrorCodes.js.map