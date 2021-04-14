import React, { useState, useEffect } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import Card from "../../../components/Card";
import { findDataToId, handleSubmit } from "./actions";
import Form from "./form";

function PeopleManageForm() {
  const { id } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();

  const [isEdit, setIsEdit] = useState(url.includes("edit"));
  const [data, setData] = useState({
    id: id || null,
    default: {
      kind: "pfisica",
      name: "",
      document: "",
      uf: "",
      city: "",
      birth_date: "",
      phone: ""
    }
  });

  const onSubmitForm = e => {
    handleSubmit(e, {
      isEdit,
      id,
      data,
      history
    });
  };

  useEffect(() => {
    if (isEdit) {
      findDataToId(id, data, setData);
    }
  }, [isEdit]);

  return (
    <Card
      title="Gerenciamento de Pessoas"
      textLink="Voltar a lista de pessoas"
      actionLink="/manage"
    >
      <Form
        initialData={data ? data.default : undefined}
        data={data}
        setData={setData}
        onSubmitForm={onSubmitForm}
      />
    </Card>
  );
}

export default PeopleManageForm;
