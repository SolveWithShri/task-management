export interface Task {
    text: string;
    isGlobal: boolean;
    isLeader: boolean;
    creator: string;
    isCompleted: boolean;
    start: Date;
    end: Date;
}
