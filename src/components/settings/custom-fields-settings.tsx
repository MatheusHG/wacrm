'use client';

import { Card, CardContent } from '@/components/ui/card';
import { CustomFieldsPanel } from '@/components/contacts/custom-fields-manager';
import { useI18n } from '@/hooks/use-i18n';

/**
 * Settings → Custom Fields. Manage the account-wide custom contact field
 * catalogue (the same panel the Contacts page exposes via a dialog). Writes
 * are admin-gated by the caller and enforced by `custom_fields` RLS.
 */
export function CustomFieldsSettings() {
  const { t } = useI18n();
  return (
    <div className="mt-4 space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-foreground">{t('settings.customFields.title')}</h2>
        <p className="text-sm text-muted-foreground">
          {t('settings.customFields.description')}
        </p>
      </div>

      <Card className="border-border bg-card ring-0 ring-transparent">
        <CardContent className="pt-4">
          <CustomFieldsPanel />
        </CardContent>
      </Card>
    </div>
  );
}
