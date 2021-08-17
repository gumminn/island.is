export interface DrivingLicense {
    licenseB: Boolean;
    licenseC: Boolean;
    licenseD: Boolean;
    licenseBE: Boolean;
    licenseCE: Boolean;
    licenseDE: Boolean;
    machineryRights: boolean;   
}

export interface machineryRights {    
    machineryA: Boolean;
    machineryH: Boolean;
    machineryB: Boolean;
    machineryI: Boolean;
    machineryC: Boolean;
    machineryJ: Boolean;
    machineryD: Boolean;
    machineryK: Boolean;
    machineryE: Boolean;
    machineryL: Boolean;
    machineryF: Boolean;
    machineryM: Boolean;
    machineryG: Boolean;
    machineryP: Boolean;
}

export interface ComputerSkills {    
//
}

export interface LanguageSkills {    
//
}

export interface References {    
    name: string;
    jobTitle: string;
    workPlace: string;
    phone: number;
}

export interface OtherSkills {    
    skills: string;
}

export interface EnclosedDocuments {    
    resume: string;
    coverLetter: string;  
    letterOfRecommendation: string;
    diploma: string;
    Other: string; 
}

export interface Child {    
    socialSecurityNumber: string;
    name: string;    
}

export interface BankInfo {    
    Banki: number;
    Hb: number;
    Reikn: number; 
}

export interface Pensionfund {    
    name: string;
}



export interface Union {    
//
}

export interface PersonalTaxCredit {    
    useTaxCredit: boolean;
    percentage: number;
}

export interface FormerEmployerSettlement {    
    unUsedVacation: boolean;
    noticePeriodEnd: Date;
}

export interface WorkingCapacity {    
    workingCapacity: number; // 1-3?
}

export interface OtherPayments {    
//
}