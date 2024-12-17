import { FC, useState } from "react";
import { renderToString } from "react-dom/server";
import Flex from "./components/Flex";
import Text from "components/Text";

const App: FC = () => {
  const [spfxValue, setSPFXValue] = useState<string | null>(null);
  const [uicValue, setUICValue] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [uicMessage, setUICMessage] = useState<string | null>(null);

  const handleNewSPFX = () => {
    if (!spfxValue) return;
    fetch("/api/generate-new-spfx", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: spfxValue,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("UI Component created:", data);
        // Provide feedback to the user, e.g., alert or UI update
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors, e.g., display error message to the user
      });
  };
  const handleNewUIC = async () => {
    if (!uicValue) return;
    await fetch("/api/generate-ui-component", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: uicValue,
      }),
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const uicMessage = await response.json().then((val) => val.message);
        setUICMessage(uicMessage || null);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors, e.g., display error message to the user
      });
  };
  const handleCommit = () => {
    if (!message) return;
    fetch("/api/commit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectName: "local-sd-tools",
        message: message,
      }),
    })
      .then((response) => {
        if (response.status === 500) {
          setUICMessage("Error!");
        }
        if (response.status === 200) {
          setUICMessage("Successfully created component!");
          setTimeout(() => {
            setUICMessage(null);
          }, 10000);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors, e.g., display error message to the user
        setUICMessage("Error!");
      });
  };
  return (
    <Flex direction="column" justify="center" align="center" wrap="wrap">
      <Flex direction="column" justify="center" align="center" wrap="wrap">
        <Text fw={700} fz={"xxxl"} m={"2rem"} p={"1.5rem"}>
          Welcome to the SD Tools
        </Text>
      </Flex>
      <Flex direction="row" justify="center" align="center" wrap="wrap">
        <Flex direction="column" justify="center" align="center" wrap="wrap">
          <Text fw={400} fz={"lg"} m={"0px"} p={".5rem"}>
            Generate a new SPFX WebPart
          </Text>
          <input
            onInput={(e) => {
              setSPFXValue(e.currentTarget.value);
            }}
            id="spfx"
            type={"text"}
          ></input>
          <div style={{ margin: ".3rem", width: "1px", height: "1px" }} />
          <button onClick={() => handleNewSPFX()} type={"submit"}>
            <Text fw={900} fz={"sm"} m={"0px"} p={".1rem"}>
              new-spfx
            </Text>
          </button>
        </Flex>
        <Flex direction="column" justify="center" align="center" wrap="wrap">
          <Text fw={400} fz={"lg"} m={"0px"} p={".5rem"}>
            Generate a new UI Component
          </Text>
          <input
            onInput={(e) => {
              setUICValue(e.currentTarget.value);
            }}
            id="uic"
            type={"text"}
          ></input>
          <label>{uicMessage}</label>
          <div style={{ margin: ".3rem", width: "1px", height: "1px" }} />

          <button onClick={() => handleNewUIC()} type={"submit"}>
            <Text fw={900} fz={"sm"} m={"0px"} p={".1rem"}>
              new-uic
            </Text>
          </button>
        </Flex>
        <Flex direction="column" justify="center" align="center" wrap="wrap">
          <Text fw={400} fz={"lg"} m={"0px"} p={".5rem"}>
            Commit
          </Text>
          <textarea
            onInput={(e) => {
              setMessage(e.currentTarget.value);
            }}
            id="msg"
          ></textarea>
          <div style={{ margin: ".3rem", width: "1px", height: "1px" }} />

          <button onClick={() => handleCommit()} type={"submit"}>
            <Text fw={900} fz={"sm"} m={"0px"} p={".1rem"}>
              push
            </Text>
          </button>
        </Flex>
      </Flex>
    </Flex>
  );
};

const SSRApp = renderToString(<App />);

export { App, SSRApp };
