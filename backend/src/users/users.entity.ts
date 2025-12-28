import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum UserStatus {
  Enabled = 'enabled',
  Disabled = 'disabled',
  Deleted = 'deleted'
}

export const USER_ROLES = ['regular', 'editor', 'admin'] as const;
export type UserRole = typeof USER_ROLES[number];

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ type: "simple-json", nullable: false })
  roles: UserRole[];

  @Column({ type: 'simple-enum', enum: UserStatus })
  status: UserStatus;
}
