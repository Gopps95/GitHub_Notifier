import { useEffect, useState } from "react"

import "./popup.css"

import bell from "./assets/bell.png"
import icon from "./assets/icon.png"
import right from "./assets/right.png"

function IndexPopup() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const notifications = async () => {
    return await fetch("https://api.github.com/notifications", {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        Authorization: " Bearer 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"
      }
    }).then((response) => response.json())
  }

  useEffect(() => {
    setLoading(true)
    notifications().then((data) => {
      setData(data)
      setLoading(false)
    })
  }, [])
  return (
    <div
      style={{
        margin: "0px 0px",
        padding: "15px",
        rowGap: "10px",
        display: "flex",
        flexDirection: "column",
        width: "450px",
        backgroundColor: "#0d1117"
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}>
        <img src={icon} alt="icon" width="40px" height="40px" />
        <img src={bell} alt="icon" width="40px" height="40px" />
      </div>
      {loading && (
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      )}
      {data.map((item: any) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              window.open(
                `https://github.com/${item.repository.full_name}`,
                "_blank"
              )
            }}
            style={{
              cursor: "pointer",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#161b22",
              padding: "10px",
              border: "2px solid #30363d",
              borderRadius: "10px"
            }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}>
              <div
                style={{
                  display: "flex",
                  fontSize: "14px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  color: "#c9d1d9"
                }}>
                {item.repository.full_name}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "18px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  color: "#c9d1d9"
                }}>
                {item.subject.title}
              </div>
            </div>
            <img src={right} alt="icon" width="20px" height="20px" />
          </div>
        )
      })}
    </div>
  )
}

export default IndexPopup
