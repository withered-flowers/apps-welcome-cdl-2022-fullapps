import got from "got";
import { parseHTML } from "linkedom";

import {
  formatOutput,
  filterQuests,
  fetchProfileName,
  fetchNodeList,
  calculateTiers,
} from "$lib/utils/validator";

export const fetchDataAsJson = async (qwiklabsUrl) => {
  const response = await got(qwiklabsUrl);
  const dom = parseHTML(response.body);

  const profileName = fetchProfileName(dom);
  const nodeList = fetchNodeList(dom);
  const validQuests = filterQuests(nodeList).map((quest) =>
    formatOutput(quest)
  );
  const tiers = calculateTiers(validQuests);

  return {
    profileName: profileName,
    tiers,
    validQuests: validQuests.length,
    detailValidQuests: validQuests,
  };
};
