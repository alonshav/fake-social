import { Pool, QueryResult } from 'pg';
import { pgConfig } from '../../pg.config';

export const pool = new Pool(pgConfig);

const getAll = async (table: string) => {
  try {
    const query = `SELECT * FROM ${table}`;
    const res = await pool.query(query);
    return res.rows;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

const getById = (table: string, id: string) => {
  try {
    const query = {
      text: 'SELECT * FROM $1 WHERE id = $2;',
      values: [table, id],
    };
    pool.query(query, (error, results) => {
      if (error) {
        throw error;
      } else {
        return results.rows;
      }
    });
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

const updateById = async <T>(
  table: string,
  id: string,
  payload: Partial<T>
) => {
  try {
    // Extract the column names and values from the row object
    const columns = Object.keys(payload);
    const values = Object.values(payload);

    // Insert the row into the table
    const result = await pool.query(
      `UPDATE ${table} SET ${columns
        .map((key, i) => `${key} = $${i + 1}`)
        .join(', ')} WHERE id=${id}`,
      values
    );
    console.log(`Inserted ${result.rowCount} row(s) successfully`);
    return result;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

const deleteById = (table: string, id: string) => {
  const query = {
    text: `DELETE FROM $1 WHERE id=$2;`,
    values: [table, id],
  };
  pool.query(query, (err, results) => {
    if (err) {
      console.error(err);
      throw new Error(`Error deleting all table rows "${table}"`);
    } else {
      return results.rows;
    }
  });
};

const deleteAll = (table: string) => {
  const query = `DELETE FROM ${table};`;

  return pool.query(query, (error, results) => {
    if (error) {
      throw new Error(`Error deleting all "${table}" table rows`);
    } else {
      return results.rows;
    }
  });
};

const addRow = async <T>(table: string, payload: T): Promise<T[]> => {
  try {
    // Extract the column names and values from the row object
    const columns = Object.keys(payload);
    const values = Object.values(payload);

    // Insert the row into the table
    const result = await pool.query(
      `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${columns
        .map((_, i) => `$${i + 1}`)
        .join(', ')})`,
      values
    );
    console.log(`Inserted ${result.rowCount} row(s) successfully`);
    return result.rows;
  } catch (err) {
    console.error(err);
    throw new Error(`Error inserting row into table "${table}"`);
  }
};

export default {
  getAll,
  getById,
  deleteAll,
  deleteById,
  updateById,
  addRow,
};
