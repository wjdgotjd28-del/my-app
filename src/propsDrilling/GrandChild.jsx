import useStore from "./store";

function GrandChild() {
    const {theme, toggleTheme} = useStore()
    return (
        <div style={{
                    border: "1px solid #666",
                    margin: "1rem",
                    backgroundColor: theme === "light" ? "#ddd" : "#111",
                    color: theme === "light" ? "black" : "white",
                    padding: "1rem"
                }}>
                    <p>GrandChild 컴포넌트에서 ㅋ테마 상태 사용 중</p>
                    <button onClick={toggleTheme}>테마 전환 (GrandChild)</button>
                </div>
            );
        }
        export default GrandChild;