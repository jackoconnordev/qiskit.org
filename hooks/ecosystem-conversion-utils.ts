import axios from "axios";
import camelCase from "lodash/camelCase";

import { Member } from "~/types/ecosystem";

async function fetchMembers() {
  try {
    // from ecosystem main
    const res = await axios.get(
      "https://raw.githubusercontent.com/qiskit-community/ecosystem/master/ecosystem/resources/members.json"
    );
    const membersArray: Member[] = [];
    Object.values(res.data).forEach((tier: any) => {
      Object.values(tier).forEach((member: any) => {
        // convert falsy values to 0, used for correct sorting on the Ecosystem page
        if (!member.stars) {
          member.stars = 0;
        }
        membersArray.push(member);
      });
    });
    return membersArray.map((obj: any) => toCamelCase(obj));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

async function fetchTiers() {
  try {
    // from ecosystem main
    const res = await axios.get(
      "https://raw.githubusercontent.com/qiskit-community/ecosystem/master/ecosystem/resources/tiers.json"
    );
    return res.data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

function toCamelCase(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((v) => toCamelCase(v));
  } else if (obj != null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: toCamelCase(obj[key]),
      }),
      {}
    );
  }
  return obj;
}

function membersFromJSON(json: any): Member {
  return {
    name: json.name,
    url: json.url,
    website: json.website,
    description: json.description,
    licence: json.licence,
    contactInfo: json.contactInfo,
    alternatives: json.alternatives,
    affiliations: json.affiliations,
    labels: json.labels,
    createdAt: json.createdAt,
    updatedAt: json.updatedAt,
    testsResults: json.testsResults,
    stylesResults: json.stylesResults,
    coveragesResults: json.coveragesResults,
    configuration: json.configuration,
    historicalTestResults: json.historicalTestResults,
    tier: json.tier,
    skipTests: json.skipTests,
    stars: json.stars,
  };
}

function membersFromJSONList(json: any[]): Member[] {
  return json.map(membersFromJSON);
}

function tiersFromJSON(json: any): any {
  return json;
}

function tiersFromJSONList(json: any[]): any[] {
  return json.map(tiersFromJSON);
}

export { fetchMembers, fetchTiers, membersFromJSONList, tiersFromJSONList };
