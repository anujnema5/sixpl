import { db } from "@/lib/firebase/config";
import { addJobs } from "@/utils/redux/jobsSlice";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";


const useFetchJobs = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { currentUser } = useSelector((store) => store.user);

    const fetchData = async () => {
        let list = []
        try {
            const querySnapshot = await getDocs(collection(db, "job-postings"))
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                list.push({ data, opened: false })
            });
            dispatch(addJobs(list)) 
        }

        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
}

export default useFetchJobs