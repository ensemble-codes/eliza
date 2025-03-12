export type MediaData = {
    data: Buffer;
    mediaType: string;
};

export enum TaskStatus {
    CREATED,
    ASSIGNED,
    COMPLETED,
    FAILED
}

export interface TaskData {
    id: string;
    prompt: string;
    params: Object;
    service: string;
    assignee?: string;
    status: TaskStatus;
    issuer: string;
    proposalId: string;
  }