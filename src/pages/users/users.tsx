import { Skeleton } from "antd";
import Table from "../../components/table";
import { userStats } from "../../helper/users-card";
import "../styles/user.scss";
import { useState, useEffect } from "react"
import TransitionWrapper from "../../template";


type CardProps = {
    icon: string;
    title: string;
    number: string | number
}

export function UserStatCard({ icon, title, number }: CardProps) {
    const [isLoading, setIsLoading] = useState(true)
   
    useEffect(() => {
        window.location.reload()
         // the loading timer for the skeleton loader
        const loadingTimer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)


        return () => clearTimeout(loadingTimer)
    }, [isLoading])


    return (
        <div className="card-user">
    
            <span className="card-img-span">
                <img className="card-img" src={icon} alt={`${title} icon`} />
            </span>
            
            <p className="card-title">{title}</p>
            {
                isLoading ? (
                    <div data-testid="skeleton-loader">
                        <Skeleton.Input  />  
                    </div>         
                ) : <p className="card-number" data-testid="number-stat">{ number.toLocaleString() }</p>
            }
            
        </div>
    )
}

export default function Users() {
    return (
        <div>

            <TransitionWrapper >
                <ul className="users-stats">
                     {
                        userStats.map((user) => (
                            <UserStatCard icon={user.icon} title={user.title}
                                key={user.id}
                                number={user.count}    
                            />
                        ))
                    }

                </ul>
            </TransitionWrapper>

            {/* table  */}
            <TransitionWrapper>
                <Table />
            </TransitionWrapper>
        </div>
    )
}