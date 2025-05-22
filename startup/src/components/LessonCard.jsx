function LessonCard({ label }) {
    const lessonLabel = label ?? 'This is Card';

    return (
        <div className="p-3 bg-red-100">
            <h1 className="font-semibold text-xl">{lessonLabel}</h1>
        </div>
    );
}

export default LessonCard;