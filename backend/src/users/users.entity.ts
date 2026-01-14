import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export const USER_ROLES = ['regular', 'editor', 'admin'] as const;
export type UserRole = typeof USER_ROLES[number];

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ type: "simple-json", nullable: false, default: '["regular"]' })
  roles: UserRole[];

  @Column()
  status: boolean;
}
