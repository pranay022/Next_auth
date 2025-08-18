export default function UserProfilePage({params}: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p className="text-gray-600 text-4xl"> Profile page <span className="text-green-500">{params.id}</span></p>
        </div>
    )
}