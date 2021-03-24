import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import Users from "./user";

@Entity("invests")
class Invests {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;
  @ManyToOne(() => Users, (user) => user.id) user: Users;
  @Column()
  mes: Date;
  @Column()
  value: number;
  @Column("timestamp with time zone")
  date: Date;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
export default Invests;
