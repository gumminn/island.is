export type ApplicationStatus =
  | 'approved'
  | 'rejected'
  | 'pending'
  | 'draft'
  | 'in_progress'

export interface Application {
  id: string
  externalId: string
  status: ApplicationStatus
  applicant: string
  typeId: string // TODO should this be a specific type on its own?
  modified: Date
  created: Date
  attachments: string[]
  answers: object
}
