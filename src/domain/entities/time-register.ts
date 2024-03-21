
export class IRegisterTimeDomain {
    id: string;
    date: Date;
    justification: string;
    approval_status: boolean;
    created_at: Date;
    updated_at: Date;

}


export class TimeRegisterEntity implements IRegisterTimeDomain {
  id: string;
  date: Date;
  justification: string;
  approval_status: boolean;
  created_at: Date;
  updated_at: Date;
  constructor(props: TimeRegisterEntity) {
    Object.assign(this, props);
  }
    static create(props: IRegisterTimeDomain): TimeRegisterEntity {
        return new TimeRegisterEntity(props);
    }
}