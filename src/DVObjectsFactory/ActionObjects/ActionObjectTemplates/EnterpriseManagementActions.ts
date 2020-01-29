import {Contains, IsDate, IsEmail, IsFQDN, IsInt, Length, Max, Min, validate, validateOrReject} from "class-validator";

export class m_EnterpriseManagementFIND {
    @Length(10, 20)
    public title: String;
}
export const m_EnterpriseManagementCREATE = {};
export const m_EnterpriseManagementUPDATE = {};
export const m_EnterpriseManagementDELETE = {};
export const m_EnterpriseManagementFindByName = {};
export const m_EnterpriseManagementFindByType = {};
