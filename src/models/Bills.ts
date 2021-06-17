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

@Entity("bills")
class Bills {
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
  status: string;

  @Column()
  value: number;

  @Column("timestamp with time zone")
  date: Date;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
export default Bills;
