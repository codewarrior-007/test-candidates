const fetchCandidates = (cbSuccess, cbFail) => {
  return fetch(
    "https://my-json-server.typicode.com/workstep/react-challenge-data/candidates"
  )
    .then((response) => response.json())
    .then((data) => {
      if (cbSuccess) cbSuccess(data);
    })
    .catch((err) => {
      console.error(err);
      if (cbFail) cbFail();
    });
};

const patchCandidate = (candidate, cbSuccess, cbFail) => {
  return fetch(
    `https://my-json-server.typicode.com/workstep/react-challenge-data/candidates/${candidate.id}`,
    {
      method: "PATCH",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(candidate),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      if (cbSuccess) cbSuccess(data);
    })
    .catch((err) => {
      console.error(err);
      if (cbFail) cbFail();
    });
};

export { fetchCandidates, patchCandidate };
