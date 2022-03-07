import { fetchDataAsJson } from "$lib/providers/cloudskillsboost";

export async function post({ request }) {
  const data = await request.formData();
  const csbUrl = data.get("csb");

  try {
    const jsonData = await fetchDataAsJson(csbUrl);

    return {
      status: 200,
      body: {
        csbData: jsonData,
      },
    };
  } catch (error) {
    return {
      status: 404,
      body: {
        errors: "Tautan Profil salah, silahkan coba masukkan tautan lagi",
      },
    };
  }
}
