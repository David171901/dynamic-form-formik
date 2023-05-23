import { Field, ErrorMessage, FieldArray } from "formik";
import { Fields } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

interface Props {
  name: string;
  label: string;
  fields: Fields[];
  values: { [key: string]: any };
  [x: string]: any;
}

export const CustomFieldArrays = ({ label, ...props }: Props) => {
  return (
    <>
      <div>
      <label className={styles.field__label}>{label}</label>
        <table className={styles.table}>
          <thead>
            <tr>
              {props.fields.map((input, index) => (
                <th
                  key={index}
                  className={styles.th}
                >
                  {input.label}
                </th>
              ))}
              <th className={styles.th}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <FieldArray {...props}>
              {({ push, remove }) => (
                <>
                  {props.values[`${props.name}`].map(
                    (_: { [key: string]: any }, index: number) => (
                      <tr
                        key={index}
                      >
                        {props.fields.map((input, indx) => (
                          <td
                            key={`${props.name}${indx}`}
                            className={styles.td}
                          >
                            <span className={styles.td__span}>
                              {input.label}
                            </span>
                            <Field
                              as={`${(input.type === 'text') ? 'input' : 'textarea'}`}
                              name={`${props.name}[${index}].${input.name}`}
                              placeholder={`${input.placeholder}`}
                              className={styles.field_array__input}
                            />
                            <ErrorMessage
                              name={`${props.name}.${index}.${input.name}`}
                              component="span"
                            />
                          </td>
                        ))}
                        <td className={styles.td}>
                          <span className={styles.td__span}>
                            Actions
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              if (props.values[props.name].length > 1)
                                remove(index);
                            }}
                            disabled={props.values[props.name].length === 1}
                            className={styles.td__button}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                  <tr>
                    <td
                      colSpan={props.fields.length + 1}
                      className={styles.td}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          push(
                            props.fields.reduce(
                              (acc: { [key: string]: any }, curr) => {
                                acc[curr.name] = "";
                                return acc;
                              },
                              {}
                            )
                          )
                        }
                        className={styles.td__button}
                      >
                        + Add new fields
                      </button>
                    </td>
                  </tr>
                </>
              )}
            </FieldArray>
          </tbody>
        </table>
      </div>
    </>
  );
};
