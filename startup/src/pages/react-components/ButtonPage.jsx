import MyButton from './../../components/MyButton';

export default function ButtonPage() {
    return (
        <div className="flex flex-col sm:flex-row gap-5 h-screen items-center justify-center">
            <MyButton />
            <MyButton />
            <MyButton />
        </div>
    )
}