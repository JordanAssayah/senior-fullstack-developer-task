import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  EDITOR = 'editor',
  REGULAR = 'regular'
};

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ type: "simple-json", nullable: false, default: JSON.stringify([UserRole.REGULAR]) })
  roles: UserRole[];

  @Column()
  status: boolean;
}
