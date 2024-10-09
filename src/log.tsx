// This file is not used in the actual code anywhere, but is there for development purposes
// Since no other logging method worked for me :3


export const log = async (item) => {
    let target_url = ""; // Fill this in with the URL of the logging server when developing
    let res;
    try {
        res = await fetch(target_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: item }),
        }).then((res) => res.json());
    } catch (e) {
        res = await fetch(target_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: "Error logging: " + e }),
        }).then((res) => res.json());
    }
    if (res.status !== "ok") {
        console.error("Error logging: " + res.error);
    }
};
