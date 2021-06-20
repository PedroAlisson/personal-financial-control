import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import User from "./User";

@Entity("invests")
class Invests {
  @PrimaryGeneratedColumn("uuid")
  id: "uuid";

  @Column()
  name: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  mes: string;

  @Column()
  value: number;

  @Column()
  amount: number;

  @Column()
  total: number;

  @Column("timestamp with time zone")
  date: Date;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
export default Invests;
