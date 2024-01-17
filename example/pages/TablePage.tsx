import {
  Row,
  TextButton,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  SolidButton,
  TableRow,
} from "../../src/main";

export default function TablePage() {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead>文章标题</TableHead>
          <TableHead>作者</TableHead>
          <TableHead colorScheme="success">获赞量</TableHead>
          <TableHead>操作</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow colorScheme="danger">
          <TableCell>测试文章</TableCell>
          <TableCell>作者 1</TableCell>
          <TableCell>3</TableCell>
          <TableCell>
            <Row className="justify-around px-2" gap="gap-1">
              <TextButton colorScheme="success" small>
                编辑
              </TextButton>
              <TextButton colorScheme="danger" small>
                删除
              </TextButton>
            </Row>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colorScheme="warning">简书</TableCell>
          <TableCell>xxxx</TableCell>
          <TableCell>44</TableCell>
          <TableCell>
            <Row className="justify-around px-2" gap="gap-1">
              <TextButton colorScheme="success" small>
                编辑
              </TextButton>
              <TextButton colorScheme="danger" small>
                删除
              </TextButton>
            </Row>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>About SSCreator UI</TableCell>
          <TableCell colorScheme="info">test_author</TableCell>
          <TableCell>17</TableCell>
          <TableCell>
            <Row className="justify-around px-2" gap="gap-1">
              <TextButton colorScheme="success" small>
                编辑
              </TextButton>
              <TextButton colorScheme="danger" small>
                删除
              </TextButton>
            </Row>
          </TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className="text-left" colSpan={2}>
            总获赞量
          </TableCell>
          <TableCell>64</TableCell>
          <TableCell>
            <SolidButton colorScheme="primary" small fullWidth>
              生成报告
            </SolidButton>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
