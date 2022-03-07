import { fetchDataAsJson } from "$lib/providers/cloudskillsboost";

export async function post({ request }) {
  const data = await request.formData();
  const csbUrl = data.get("csb");

  const jsonData = await fetchDataAsJson(csbUrl);

  if (jsonData.profileName === "Google Cloud Skills Boost") {
    return {
      status: 404,
      body: {
        errors: "Profil salah, silahkan coba lagi",
      },
    };
  } else {
    return {
      status: 200,
      body: {
        csbData: jsonData,
      },
    };
  }
}
